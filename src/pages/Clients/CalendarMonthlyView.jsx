import PropTypes from "prop-types";
// import post1 from "../../assets/Images/Monday, September 5, 2024.jpg";
// import post2 from "../../assets/Images/Saturday, September 21, 2024.jpg";
// import reel1 from "../../assets/Images/LETUSD1.mp4";

const CalendarPosts = [
    {
        id: 1,
        calendar: "January Calendar",
        created_at: "Saturday, September 21, 2024",
        date: "Saturday, September 21, 2024",
        post_count: 5,
        type: "image",
        category: "Services",
        cta: "Sign Up Now!",
        strategy: "Increase Engagement",
        resource: "Image",
        tagline: "Experience the Future of Car Care",
        caption: "At Good Guys Wash Shack, we are bringing a perfect wash package to keep your car looking its best! 🚗✨",
        hashtags: "#Sale #Discount #Shopping",
        creatives: "https://drive.google.com/file/d/1Zmc5VPgmX0OTR1zeAy3lhXW5Vrh_XIVv/view",
        e_hooks: "What’s your car’s go-to wash package? Tell us below!",
        client_approval: true,
        comments: "Looks great!",
        // creativesType: "image", 
    },
    {
        id: 2,
        calendar: "January Calendar",
        created_at: "Tuesday, September 3, 2024",
        date: "Tuesday, September 3, 2024",
        post_count: 3,
        type: "Post",
        category: "Benefits",
        cta: "Experience the Future of Car Care",
        strategy: "Boost Sales",
        resource: "Newsletter",
        tagline: "Exclusive Offer!",
        caption: "What’s your car’s go-to wash package? Tell us below!",
        hashtags: "#Offer #Exclusive",
        creatives: "https://drive.google.com/file/d/1JaLIj99g1RJfCzxh49ftUR2FJv9DGLlf/view",
        e_hooks: "Act fast",
        client_approval: false,
        comments: "Needs revision.",
        // creativesType: "video",
    },
    {
        id: 3,
        calendar: "January Calendar",
        created_at: "Tuesday, September 3, 2024",
        date: "Tuesday, September 3, 2024",
        post_count: 3,
        type: "Post",
        category: "Benefits",
        cta: "Experience the Future of Car Care",
        strategy: "Boost Sales",
        resource: "Newsletter",
        tagline: "Exclusive Offer!",
        caption: "What’s your car’s go-to wash package? Tell us below!",
        hashtags: "#Offer #Exclusive",
        creatives: "https://drive.google.com/file/d/1yXy3BvrVGFudRy0Hpsmc6tEMzevq9B9Q/view",
        e_hooks: "Act fast",
        client_approval: false,
        comments: "Needs revision.",
        // creativesType: "reel",
    },
];

const getMediaTypeFromLink = (link, type = null) => {
    if (!link) return null;

    // If a specific type is provided, use it
    if (type) return type;

    // Default to checking the file extension (if embedded in the link)
    if (link.includes(".jpg") || link.includes(".jpeg") || link.includes(".png") || link.includes(".gif")) {
        return "image";
    }

    if (link.includes(".mp4") || link.includes(".mov") || link.includes(".avi")) {
        return "video";
    }

    // For generic Google Drive links, fallback to default (reel or unsupported)
    if (link.includes("drive.google.com/file/d/")) {
        return "reel"; // Assume it's a reel unless specified otherwise
    }

    return null; 
};

const Media = ({ src, alt, className, ...props }) => {
    if (!src) return <p>Media not available</p>;

    const resolvedType = getMediaTypeFromLink(src);

    if (resolvedType === "image") {
        return <img src={src} alt={alt || "media"} className={className} {...props} />;
    }

    if (resolvedType === "video") {
        return (
            <video className={className} controls {...props}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }

    if (resolvedType === "reel") {
        return (
            <iframe
                src={`https://drive.google.com/file/d/${src.match(/\/d\/([^/]+)/)?.[1]}/preview`}
                title={alt || "reel"}
                className={className}
                allow="autoplay; encrypted-media"
                allowFullScreen
                {...props}
            />
        );
    }

    return <p>Unsupported media type</p>;
};

const PostCard = ({ post, isEven }) => {
    return (
        <div className={`post-card border wrap border-20 row ${isEven ? "flex-row-reverse" : "flex-row"} mb-5 align-center`}>
            <div className="col-md-4 col-sm-12 d-flex">
                <Media
                    src={post.creatives}
                    alt={post.tagline}
                    className="post-media width-100 border-tl-20 border-bl-20 min-height-400px object-cover"
                />
            </div>
            <div className="col-md-8 col-sm-12 post-content px-3">
                <h2 className="color-primary mb-2 mt-3">{post.tagline}</h2>
                <p className="mb-1"> {post.date}</p>
                <p className="mb-1"> {post.category}</p>
                <p className="mb-1"> {post.type}</p>
                <p className="mb-1"> {post.cta}</p>
                <p className="mb-1"> {post.caption}</p>
                <p className="mb-1">{post.hashtags}</p>
                <p className="mb-1">{post.client_approval ? "Approved" : "Pending"}</p>
                <p className="mb-1">{post.comments}</p>
            </div>
        </div>
    );
};


Media.propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["image", "video", "reel"]).isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
};

PostCard.propTypes = {
    post: PropTypes.shape({
        tagline: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        cta: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        hashtags: PropTypes.string.isRequired,
        creatives: PropTypes.string.isRequired,
        creativesType: PropTypes.oneOf(["image", "video", "reel"]).isRequired,
        client_approval: PropTypes.bool.isRequired,
        comments: PropTypes.string.isRequired,
    }).isRequired,
    isEven: PropTypes.bool.isRequired,
};

const CalendarMonthlyView = () => {
    return (
        <div className="section">
            <div className="calendar-monthly-view">
                <h1 className="mb-5 text-center">Monthly Calendar View</h1>
                {CalendarPosts.map((post, index) => (
                    <PostCard key={post.id} post={post} isEven={index % 2 === 0} />
                ))}
            </div>
        </div>
    );
};

export default CalendarMonthlyView;
