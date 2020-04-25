import React from 'react'
import moment from 'moment'

//will be using moment js package to format the date that we are displaying

const ProjectSummary = ({project}) => {
    return(
        <div className = "project-list section">
            <div className = "card z-depth-0 project-summary">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title">{project.title}</span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className = "grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectSummary