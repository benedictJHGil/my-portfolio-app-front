import "./not-found.page.css";
import MyImage from "@/components/MyImage/MyImage";
import Button from "@/components/Button/Button";

function NotFound() {
  return (
    <div className="error-container">
        <MyImage
            src={"/images/404_page.png"}
            alt={"404"}
            fill
            className={"image-404"}
        />

        <h1 className="title">페이지를 찾을 수 없습니다.</h1>

        <p className="description">
            주소가 잘못되었거나, 더 이상 존재하지 않는 페이지입니다.<br />
            아래 버튼을 이용해 이동해 주세요.
        </p>

        <div className="actions">
            <Button
                href={"/"}
                className={"button link-btn-404 link-home"}
            >
                홈으로 가기
            </Button>

            <Button
                href={"/portfolio/main"}
                className={"button link-btn-404 link-main"}
            >
                포트폴리오 보러가기
            </Button>
        </div>
    </div>
  )
}

export default NotFound