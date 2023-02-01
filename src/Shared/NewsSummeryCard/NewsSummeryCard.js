import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ImBookmark, ImEye, ImShare, ImStarFull } from 'react-icons/im';
const NewsSummeryCard = ({ news }) => {
    const { _id, title, total_view, rating, author, details, image_url } = news;
    return (
        <div className='m-3'>
            <Card className="">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Image
                            roundedCircle
                            src={author.img}
                            style={{ height: '60px' }}
                        ></Image>
                        <div className='mx-3 my-0'>
                            <p className='mb-0'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <ImBookmark className='me-2'></ImBookmark>
                        <ImShare></ImShare>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                        <ImStarFull className='text-warning me-2'></ImStarFull>
                        <span>{rating.number}</span>
                    </div>
                    <div>
                        <ImEye className='me-2'></ImEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;