import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 항상 통과시킬 공개 경로 (정적 파일, SEO, 헬스체크 등)
const PUBLIC_PATHS = [
  '/wip', '/favicon.ico', '/robots.txt', '/sitemap.xml', '/_next', '/assets', '/images', '/api/health'
];

// 보호할 주요 경로 (예: /portfolio/**)
const PROTECTED_PREFIXES = ['/', '/portfolio', '/data-view'];

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const path = url.pathname;

  // --- 상태 체크 ---
  const wipOn = process.env.NEXT_PUBLIC_WIP === 'on';
  const isPublic = PUBLIC_PATHS.some((p) => path === p || path.startsWith(p));

  // --- 비밀 토큰 확인 ---
  const tokenFromQuery = url.searchParams.get('beta');       // URL 파라미터에서 beta=... 추출
  const tokenEnv = process.env.BETA_TOKEN;                   // 환경변수에 저장한 토큰
  if (tokenFromQuery && tokenEnv && tokenFromQuery === tokenEnv) {
    // 맞는 토큰이면 쿠키 발급 후, 쿼리 제거 리다이렉트
    const targetPath = path === '/wip' ? '/portfolio/home' : path;
    const res = NextResponse.redirect(new URL(targetPath, req.url), 307);
    res.cookies.set('beta', tokenEnv, { httpOnly: true, sameSite: 'lax', path: '/' });
    return res;
  }
  const hasValidBetaCookie = tokenEnv && req.cookies.get('beta')?.value === tokenEnv;

  // --- 작업중 모드(WIP)일 때 ---
  if (wipOn) {
    // 1) 공개 경로는 그냥 통과
    if (isPublic) return NextResponse.next();

    // 2) 보호 경로 접근 시 → 비밀 쿠키 있는 사람만 통과
    const isProtected = PROTECTED_PREFIXES.some((prefix) => path.startsWith(prefix));
    if (isProtected && !hasValidBetaCookie) {
      const wipUrl = new URL('/wip', req.url);
      return NextResponse.redirect(wipUrl, 307); // 주소창에 /wip 노출
    }
  }

  // --- WIP가 꺼진 경우(정식 공개) ---
  if (!wipOn && path === '/' || path === '/wip') {
    const dest = url.clone();
    dest.pathname = '/portfolio/home';
    dest.search = '';
    return NextResponse.redirect(dest, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/preview).*)'],
};