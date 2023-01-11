import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import '../../styles/config/normalize.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import { LandingCard } from '../components/MarketingPages/Cards';
import '../../styles/config/_pm-icons.css';
import Button from '../components/Shared/Button';
import {CallOut, Feature, Divider, SideXSide, Paragraph,
  SectionStyles,
  BaseLinkStyles,
  UnorderedListStyles,
  OrderedListStyles, TextSection } from 'aether-marketing';

const HeroWrapper = styled.section`
  /* background-color: ${(props) => props.theme.colors.grey_05}; */
  padding: 48px 80px;
    @media (max-width: 991px) {
        padding: 40px !important;
      }
    .hero-image {
        margin: 0px;
    }
    .img-frame {
        border-radius: ${(props) => props.theme.borderRadius.medium};
        border: 8px solid ${(props) => props.theme.colors.grey_20};// $grey_20
        box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.32);
    }
`


const ContentContainer = styled.div`
  margin-bottom: 40px;
  @media (min-width: 992px) {
    margin-bottom: 100px;
  }
  a {
    ${BaseLinkStyles.componentStyle.rules}
  }

  ul {
    ${UnorderedListStyles.componentStyle.rules}
  }

  ol {
    ${OrderedListStyles.componentStyle.rules}
  }
`;

const InputStyled = styled.div`
margin-top: 20px;
input{
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.forms.border};
  border-radius: ${(props) => props.theme.borderRadius.small};
  box-sizing: border-box;
  box-shadow: none;
  color: ${(props) => props.theme.colors.grey_05};
  font-size: 16px;
  height: 40px;
  margin: 0;
  padding: 8px 1px 8px 14px;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  width: 500px;
}
  /* Removes arrows from number fields
  Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  textarea {
    width: 500px;
  }
input.submit {
  color: ${(props) => props.theme.colors.white} !important;
  background-color: ${(props) => props.theme.colors.orange_50};
  transform: translateZ(0px);
  transition: none !important;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.orange_60};
    border: 1px solid transparent;
    -webkit-appearance: none;
    border-inline: 1px solid ${(props) => props.theme.colors.orange_60};
  }
}
  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &.form-control {
    :focus {
      border: 1px solid ${(props) => props.theme.colors.blue_30};
      box-shadow: 0 0 0 1px ${(props) => props.theme.colors.blue_30};
      outline: none;
    }
    ::-webkit-input-placeholder,
    :-moz-placeholder,
    ::placeholder,
    :-ms-input-placeholder {
      color: ${(props) => props.theme.forms.text};
    }
    &.is-invalid {
      background-color: ${(props) => props.theme.colors.white};
      background-image: none;
      border: 1px solid ${(props) => props.theme.colors.red_error};
      &:focus {
        box-shadow: 0 0 0 1px ${(props) => props.theme.colors.red_error};
      }
    }
  }
`;
const callout = {
  title: "Collaborate with us",
divider: true,
body: [
  '<p class="subtitle">We welcome you to be a contributor to one of our 50 public GitHub repositories.</p>',
],
link: {
  buttonType: "secondary",
  text: "View our Github",
  src: "https://github.com/postman-open-technologies",
  target: "",
  id: "",
  gaCategory: "e",
  gaLabel: "",
  as: "a",
},
};
const projects = {
  "title": "Some of the Open Source projects we love and support",
}

const tools  = {
  paddingTop: "",
  paddingBottom: "",
  divider: true,
  backgroundColor: "",
  title: "Some of the Open Source projects we love and support",
  body: [
  ],
  items: [
    {
      imageSize: "icon",
      title: "API Gateways",
      subtitle: [],
      
      media: {
        src: "https://voyager.postman.com/icon/api-gateways-icon-postman.svg",
        alt: "Postman API Gateways. Illustration.",
      },
      "link": {
        "src": "https://learning.postman.com/open-technologies/patterns/graphql",
        "text": "Read the doc",
        "target": ""
      }
    },
    {
      imageSize: "icon",
      title: "OpenApi-Linter",
      subtitle: [],
      
      media: {
        src:"https://voyager.postman.com/icon/open-api-icon-postman.svg",
        alt: "Postman OpenAPI Linter. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Spectral",
      subtitle: [],
      
      media: {
        src: "https://voyager.postman.com/icon/api-logging-checklist-icon-postman.svg",
        alt: "Postman Spectral. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Collection Run Chrome Extension",
      subtitle: [],
      
      media: {
        src:"https://voyager.postman.com/icon/extension-folder-icon-postman.svg",
        alt: "Postman Collection Run Chrome Extension. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Blast",
      subtitle: [],
      
      media: {
        src: "https://voyager.postman.com/icon/appplication-performance-icon-postman.svg",
        alt: "Postman Blast. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Newman Trace",
      subtitle: [],
      
      media: {
        src: "https://voyager.postman.com/icon/newman-trace-icon-postman.svg",
        alt: "Postman Newman Trace. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "HTTPBin",
      subtitle: [],
      
      media: {
        src: "https://voyager.postman.com/icon/http-request-icon-postman.svg",
        alt: "Postman HTTPBin. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "AsyncAPI",
      subtitle: [],
      
      media: {
        src: "https://voyager.postman.com/icon/async-api-icon-postman.svg",
        alt: "Icon version of Async API logo.Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "OpenAPI Initiative (OAI)",
      subtitle: [],
      
      media: {
        src:"https://voyager.postman.com/icon/open-api-icon-postman.svg",
        alt: "Icon of Open API logo. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "GraphQL",
      subtitle: [],
      
      media: {
        src:"https://voyager.postman.com/icon/graphql-icon-postman.svg",
        alt: "Postman GraphQL. Illustration.",
      },
      link: {
        text: "Read the doc",
        src: "X",
        target: "",
      },
    },
    {
      imageSize: "icon",
      title: "gRPC",
      subtitle: [],
      
      media: {
        src:"https://voyager.postman.com/logo/external/grpc-logo.svg",
        alt: "Postman gRPC. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Collections",
      subtitle: [],
      
      media: {
        src:"https://voyager.postman.com/icon/collections-folder-icon-postman.svg",
        alt: "Postman Collections. Illustration.",
      },"link": {
          "src": "https://github.com/postman-open-technologies/collections",
          "text": "Read the doc",
          "target": ""
        }
    },
    {
      imageSize: "icon",
      title: "JSON Schema",
      subtitle: [],
      
      media: {
        src:"https://voyager.postman.com/icon/json-schema-icon-postman.svg",
        alt: "Postman JSON Schema. Illustration.",
      }
    },
   
  ],
};

// const specifications = {
//   paddingTop: "",
//   paddingBottom: "",
//   divider: true,
//   backgroundColor: "",
//   title: "API specifications",
//   body: [
    
//   ],
//   items: [
//     {
//       imageSize: "icon",
//       title: "AsyncAPI",
//       subtitle: [],
      
//       media: {
//         src: "/assets/open-tech/postman-async-api.png",
//         alt: "Postman AsyncAPI. Illustration.",
//       }
//     },
//     {
//       imageSize: "icon",
//       title: "OpenAPI Initiative (OAI)",
//       subtitle: [],
      
//       media: {
//         src:"/assets/open-tech/postman-open-api.png",
//         alt: "Postman OpenAPI Initiative. Illustration.",
//       }
//     },
//     {
//       imageSize: "icon",
//       title: "GraphQL",
//       subtitle: [],
      
//       media: {
//         src:"/assets/open-tech/postman-graphql.png",
//         alt: "Postman GraphQL. Illustration.",
//       },
//       link: {
//         text: "Read the doc",
//         src: "X",
//         target: "",
//       },
//     },
//     {
//       imageSize: "icon",
//       title: "gRPC",
//       subtitle: [],
      
//       media: {
//         src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgrpc.io%2Fimg%2Flogos%2Fgrpc-icon-color.png&f=1&nofb=1&ipt=295cbb615ec3d7629da68e94d6b83712030b68e87530c2e9fc8d2847c7a7e9f1&ipo=images",
//         alt: "Postman gRPC. Illustration.",
//       }
//     },
//     {
//       imageSize: "icon",
//       title: "Collection Format",
//       subtitle: [],
      
//       media: {
//         src:"https://voyager.postman.com/icon/engineering-styleguide-icon-postman.svg",
//         alt: "Postman Collection Format. Illustration.",
//       },"link": {
//           "src": "https://github.com/postman-open-technologies/collections",
//           "text": "Read the doc",
//           "target": ""
//         }
//     },
//     {
//       imageSize: "icon",
//       title: "JSON Schema",
//       subtitle: [],
      
//       media: {
//         src:"/assets/open-tech/postman-json-schema.png",
//         alt: "Postman JSON Schema. Illustration.",
//       }
//     },
//     {
//       imageSize: "icon",
//       title: "Spectral",
//       subtitle: [],
      
//       media: {
//         src:"/assets/open-tech/postman-log-checklist.png",
//         alt: "Postman Spectral. Illustration.",
//       }
//     },
//   ],
// };

const data = {
  
  "layout": "medium",
  "divider": false,
  "left": "media",
  "right": "text",
  "paddingBottom": "",
  "paddingTop": "",
  "backgroundColor": "",
  "textClassName": "",
  "textContainer": "",
  "headerTitle": "",
  "headerBody": [""],
  "SideXSideTextRight": true,
  "textPaddingBottomRight": "0px",
  "textPaddingTopRight": "0px", 
  "textTitleRight": "Read the blog post: How We're Protecting Your Postman API Keys in GitHub",
  "textSubtitleRight": "",
  "textBodyRight": [
    "<p>Developers contribute code to open source projects in GitHub every day; unfortunately, during this process sometimes security credentials are shared by accident. So Postman has implemented a new token-scanning service in GitHub that will send you a notification if you accidentally commit a Postman API key to a public repository. This gives you a chance to respond quickly before there's any unauthorized access your data.</p>"
  ],
  "linkRight": [
    {
      "type": "arrowLink",
      "text": "Read the Blog Post",
      "src": "https://blog.postman.com/how-were-protecting-your-postman-api-keys-in-github/",
      "target": "same-tab",
      "id": "read-blog-post",
      "gaCategory": "open-philosophy-page",
      "gaLabel": "read-blog-post"
    }
  ],
  "media": {
    "src": "https://voyager.postman.com/illustration/postman-security-illustration.svg",
    "alt": "Illustration of Postmanaut with lock. Illustration.",
    "shadow": false
  },
  "videoRight": {},
  "videoLeft": {},
  "iconList": {},
  "listTitle": ""
}
const formdata = {
  title: "Need to talk to someone on the Open Technology team?" ,
  body:["Tell us more and a member of our team will contact you."],
  legal: "By clicking 'Become a partner' below, you agree to the processing of personal data you provide in accordance with Postman's Privacy Policy. Postman respects your privacy, and information collected on this site is for the sole purpose of matching you with appropriate studies."
}
class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Open Technology" slug="/" />
        <div className="container-fluid">
          <HeroWrapper className="row section align-items-center hero" >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
                  <h1>Postman Open Technology</h1>
                  <p className="subtitle">
                  Open Tech is Postman's central instance for Open Source, whether it is using, contributing or creating Open Source software, specifications, libraries or other components, that the API industry relies on today or tomorrow. It consists of three operative pillars: Open Strategy, the Program Office and Developer Relations.
                  </p>
                  <Button
                    onClick={() => {
                      navigate("/specifications/collections/")
                    }} 
                    className="mb-5 secondary"
                  >
                    Explore the Docs
                  </Button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                  <img
                    src="https://voyager.postman.com/illustration/postman-learning-center-documentation-illustration.svg"
                    width="637"
                    height="411"
                    className="hero-image img-fluid"
                    alt="Postmanaut sitting at computer. Illustration."
                  />
                </div>
              </div>
            </div>
          </HeroWrapper>
        </div>
        <Divider fullWidth />
        <CallOut body={maincallout.body} divider="false" paddingBottomStyles="0px" />
        {/* <CallOut title={projects.title} paddingBottomStyles="0px"/> */}
        <div className="container">
        <Feature
        paddingTop={tools.paddingTop}
        paddingBottom={tools.paddingBottom}
        divider={tools.divider}
        title={tools.title}
        body={tools.body}
        media={tools.media}
        backgroundColor={tools.backgroundColor}
        items={tools.items}
        bodyLink={tools.bodyLink}
      />
          {/* <Feature
        paddingTop={specifications.paddingTop}
        paddingBottom={specifications.paddingBottom}
        divider={specifications.divider}
        title={specifications.title}
        body={specifications.body}
        media={specifications.media}
        backgroundColor={specifications.backgroundColor}
        items={specifications.items}
        bodyLink={specifications.bodyLink}
      /> */}
       
          <CallOut title={callout.title} textAlign="left"
          body={callout.body} link={callout.link}
           />
          
         <h2 className='my-5'>Form is a mockup, does NOT work</h2>
         <SectionStyles
        
      >
        <div className="container">
          <div className="row">
         
            <div className="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0 mb-5 mb-lg-0 pr-lg-5">
              <ContentContainer className="text-left">
              <TextSection
                  subtitle={formdata.subtitle}
                  layout={formdata.layout}
                  button={formdata.button}
                  backgroundColor={formdata.backgroundColor}
                  paddingTop="0px"
                  title={formdata.title}
                  body={formdata.body}
                />
              </ContentContainer>
             
            
                <div className="text-center">
                  <img alt="Postmanaut on hoverboard. Illustration." className="img-fluid" src="https://voyager.postman.com/illustration/get-in-touch-postman-hoverboard-illustration.svg" />
                </div>
           
            </div>
            <div className="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0 pl-lg-5">
              {/* <FormV7 form={form} /> */}
              <InputStyled>
                  <form>
                      <label>
                        Name:
                        <input type="text" name="name" />
                      </label>
                      <label>
                        Email
                        <input type="text" name="email" />
                      </label>
                      <br/>
                      <label>
                        How can Open Tech help you?<br/>
                        <textarea rows="10" type="text" name="message" />
                      </label>
                      <input className='submit' type="submit" value="Submit" />
                    </form>
                </InputStyled>
               <Paragraph className='small'>{formdata.legal}</Paragraph>
              
            </div>
          </div>
        </div>
      </SectionStyles>
      
         <Divider />
         <SideXSide {...data} />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
