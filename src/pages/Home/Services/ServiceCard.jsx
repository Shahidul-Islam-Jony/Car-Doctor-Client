import { AiOutlineArrowRight } from 'react-icons/ai';
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-3xl text-orange-500 ">Price : ${price}</p>
                    <b className="text-2xl text-orange-600"><AiOutlineArrowRight></AiOutlineArrowRight></b>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard;