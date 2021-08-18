import React, { useEffect, useState } from "react";
import { Container, Spinner, Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import sanityClient from "../sanity-client/client";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "../serializer/serializer";
import dayjs from "dayjs";
import tr from "dayjs/locale/tr";
import relativeTime from "dayjs/plugin/relativeTime";
import { urlFor } from "../util/sanityImageBuilder";
dayjs.locale(tr);
dayjs.extend(relativeTime);

const PostTitle = styled.h1`
  font-family: "KoHo";
  font-size: 50px;
  color: rgb(73, 194, 216);
  text-align: center;
  margin-left: 10px;
`;

const UserTitle = styled(PostTitle)`
  font-size: 20px;
  font-family: "Roboto Mono";
  text-align: left;
`;

const DateTitle = styled(UserTitle)`
  color: #beb7b7;
  font-weight: bold;
`;

const ReadTimeTitle = styled(DateTitle)`
  font-size: 16px;
`;

export const Post = () => {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image,
        publishedAt,
        _createdAt
       }`,
        { slug }
      )
      .then((data) => {
        setPostData(data[0]);
      })
      .catch(() => {
        setError("Böyle bir post yok. URL'in doğru olduğundan emin ol");
      });
  }, [slug]);
  if (!postData) {
    return <Spinner animation="border" size="sm"></Spinner>;
  }
  if (error) {
    return (
      <div style={{ flexGrow: 1 }}>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <Container
      fluid
      className="bg-dark d-flex justify-content-center align-items-center"
    >
      <Container className="bg-transparent mt-5 pl-2">
        <Col className="blog-content bg-transparent">
          <PostTitle>{postData.title.toUpperCase()}</PostTitle>
          <Row className="d-flex justify-content-between align-items-center">
            <Col className="d-flex justify-content-start align-items-center ml-2 my-5 flex-sm-col">
              <Image
                className="rounded-circle img-fluid"
                src={urlFor(postData.authorImage).width(60).height(60).url()}
                alt={postData.name}
              />
              <Col>
                <UserTitle>{postData.name}</UserTitle>
                <UserTitle>
                  <a
                    className="twitter-username"
                    href="http://twitter.com/accurcy"
                  >
                    @accurcy
                  </a>
                </UserTitle>
              </Col>
              <Col className="ml-5 date-title mt-xs-3">
                <DateTitle>
                  Son düzenleme {dayjs(postData._createdAt).fromNow()}
                </DateTitle>
                <ReadTimeTitle>4 dk okuma süresi</ReadTimeTitle>
              </Col>
            </Col>
          </Row>
          <BlockContent
            blocks={postData.body}
            projectId={process.env.REACT_APP_PROJECT_ID}
            dataset={process.env.REACT_APP_DATASET}
            className="block-content"
            serializers={serializers}
          />
        </Col>
      </Container>
    </Container>
  );
};
export default Post;
