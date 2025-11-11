export interface DevEnv {
	id: number
	name: string
	type: string
	level: string
	logo_url: string
}

export interface IncomingProject {
	id: number; 
	title: string; 
	type: string; 
	startdate?: string | null; 
	enddate?: string | null; 
	git_rep_url?: string | null; 
	page_url?: string | null; 
	dev_env: DevEnv[]; 
	image_url?: string | null; 
	role: string; 
	result: string; 
	content?: string | null;
}