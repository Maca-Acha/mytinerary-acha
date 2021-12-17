const Activity = ({activity}) => {
    return (
        <div className="activity">
            <div className="activityPic" style={{backgroundImage:`url("${activity.image}")` }}>
                <h5>{activity.title}</h5>
            </div>
        </div>
    )
}

export default Activity