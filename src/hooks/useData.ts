// website is the only thing that may be null

import projects from "../data/projects"

export interface Projects {
    color: string,
    image: string,
    title: string,
    tools: string,
    website: string,
    icon: string,
    project_site: string
}

const useData = () => ({data: projects});

export default useData;