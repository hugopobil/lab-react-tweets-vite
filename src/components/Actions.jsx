const Actions = () => {
    return (
        <div className="actions">
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                crossorigin="anonymous"
            />
            <i className="far fa-comment" data-testid="comment-icon"></i>
            <i className="fas fa-retweet" data-testid="retweet-icon"></i>
            <i className="far fa-heart" data-testid="heart-icon"></i>
            <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
    );
}

export default Actions;