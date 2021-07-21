import { useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import sanityClient from "../sanity-client/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import tr from "dayjs/locale/tr";
import { urlFor } from "../util/sanityImageBuilder";
dayjs.locale(tr);

const PostTitle = styled.h2`
  font-family: "KoHo", "cursive";
  font-size: 36px;
  color: rgb(73, 194, 216);
  margin-bottom: 10px;
  font-weight: bold;
  word-wrap: break-word;
  line-height: 1.6;
  box-sizing: border-box;
  white-space: normal !important;
`;

const Subtitle = styled(PostTitle)`
  font-size: 24px;
  font-weight: 500;
`;

const AuthorName = styled(PostTitle)`
  font-size: 30px;
  font-weight: 500;
  &:hover {
    font-weight: bold;
    color: white;
  }
`;

const PublishedAtTitle = styled(PostTitle)`
  font-size: 24px;
  border: solid white;
  border-width: 1px 0 1px 0;
  font-family: "Roboto Mono";
  color: white;
  margin: 10px 0 10px 0;
`;

export const Works = () => {
  const [posts, setPosts] = useState();
  // const [emptyPost, setEmptyPost] = useState(false);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
                title,
                "name":author->name,
                "authorImage":author->image,
                _createdAt,
                publishedAt,
                subtitle,
                body,
                slug,
                mainImage{
                asset->{
                _id,
                url
                }
            }
            }`
      )
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);
  if (!posts) {
    return (
      <div className="container-spinner">
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <Container
      fluid
      className="d-flex bg-dark justify-content-center align-items-center"
      style={{ backgroundColor: "#282a36" }}
    >
      {/* post content */}
      <Container className="bg-dark" style={{ width: 750 }}>
        {posts &&
          posts.map((post, index) => {
            return (
              <div key={index} data-aos="fade-up">
                <Col className="my-5">
                  <Image
                    src={post.mainImage.asset.url}
                    alt=""
                    className="rounded img-fluid"
                  />
                  <Link
                    to={"/works/" + post.slug.current}
                    key={post.slug.current}
                    style={{ textDecoration: "none" }}
                  >
                    <PostTitle className="mt-3 d-flex text-center">
                      {post.title}
                    </PostTitle>
                    <Subtitle>{post.subtitle}</Subtitle>
                  </Link>
                  <Row className="mt-4 mx-2">
                    <Image
                      src={urlFor(post.authorImage).width(50).height(60).url()}
                      alt={post.name}
                      className="rounded img-fluid mr-3"
                    />
                    <AuthorName>{post.name}</AuthorName>
                  </Row>
                  <Container className="d-flex w-100 bg-transparent justify-content-start align-items-end mt-3">
                    <PublishedAtTitle>
                      {dayjs(post.publishedAt).format("D MMM, YYYY")}
                    </PublishedAtTitle>
                  </Container>
                </Col>
              </div>
            );
          })}
      </Container>
    </Container>
  );
};

export default Works;
