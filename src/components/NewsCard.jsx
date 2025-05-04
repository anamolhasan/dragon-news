import { FaEye, FaStar } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    thumbnail_url,
    details,
    author,
    total_view,
    rating,
    tags,
    category_id,
  } = news;

  return (
    <div className=" lg:card-side bg-base-100 shadow-xl border p-5 space-y-5 rounded-2xl">
      <div className="flex justify-between items-center p-3 rounded-2xl bg-gray-100 ">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="flex items-center gap-1 text-xs">
              <BsCalendarDate />{" "}
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 mr-5 ">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>

      <h2 className=" text-xl font-bold">{title}</h2>
      <figure className="">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="h-[200px] w-full object-cover rounded-xl"
        />
      </figure>

      <div className="  space-y-3">
        <p className="text-gray-600">{details.slice(0, 200)}...</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar /> {rating.number} ({rating.badge})
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <FaEye /> {total_view}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline badge-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="card-actions justify-end">
          <Link to={`/news-details/${id}`} className="btn btn-sm btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
