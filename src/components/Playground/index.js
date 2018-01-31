import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

const Playground = () => {
  return (
    <div className="Post">
      <div className="Post__Header">
        <a href="/departments/5f657a80-5c54-43fe-952f-59944c9d9d6e">
          <div className="Post__Header__Image">A</div>
        </a>
        <div className="Post__Header__User">
          <a
            className="no_txt_align"
            href="/departments/5f657a80-5c54-43fe-952f-59944c9d9d6e">
            <div className=" Post__Header__User__Name">Administration</div>
          </a>
          <div className="Post__Header__User__Info">
            <span className="Post__Header__User__Info__Date">2 hrs</span>
          </div>
        </div>
        <div className="OptionsList">
          <div className="OptionsList__dropDownIcon">
            <i className="fa fa-ellipsis-v" />
          </div>
        </div>
      </div>
      <div className="clearfix" />
      <div>
        <div className="Post__MediaContainer post-media">
          <div className="collage-container ">
            <div className="collage cols-1">
              <div className="collage-col">
                <div className="collage-item loaded">
                  <a
                    href="#"
                    className="media-viewer-trigger"
                    data-media-url="https://itworxhub.blob.core.windows.net/a1a5384f-f0fc-4df9-9f37-caf775af43c1/605e9a2a-99fd-4588-87fb-1b7c92771898%23%24%23Admin-HUB-Menu%20-New.jpg?sv=2015-12-11&amp;sr=c&amp;sig=4g1w1K%2FI9sdJ4nSmyClIDubl%2B7CKsC%2BlbQ4rj1zOU00%3D&amp;st=2018-01-29T11%3A32%3A56Z&amp;se=2018-01-29T14%3A35%3A56Z&amp;sp=r">
                    <div className="collage-media" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Post__ActionsContainer">
        <div className="Post__ActionsContainer__Inner">
          <div className="Post__ActionsContainer__Inner__Actions">
            <span className="Post__ActionsContainer__Inner__Actions__Action">
              <span>
                <span>Comments</span>
              </span>
            </span>
          </div>
          <div className="Post__ActionsContainer__Inner__Statistics">
            <a>
              <span>Seen By</span>
            </a>
          </div>
        </div>
      </div>
      <div className="Post__ContributeContainer">
        <Button type="Post__ContributeContainer__MainActions" title="Like">
          <i className="fa fa-thumbs-up" />
        </Button>
        <Button type="Post__ContributeContainer__MainActions" title="Comment">
          <i className="fa fa-comment" />
        </Button>
      </div>
      <div className="Post__PostDiscussion">
        <div className="Post__PostDiscussion__Discussion" />
        <div className="security__Div">
          <div className="DiscussionContainer">
            <div className="DiscussionContainer__Add">
              <a href="/people/edd7e46d-42a8-4e5e-8c63-a849a8bf5e3a">
                <img
                  src="https://itworxhub.blob.core.windows.net/a1a5384f-f0fc-4df9-9f37-caf775af43c1/c9922009-c08d-405a-bfbc-bba9782fc963%23%24%23edd7e46d-42a8-4e5e-8c63-a849a8bf5e3a?sv=2015-12-11&amp;sr=c&amp;sig=RHHMG5xREOc%2B6TMAoR6wr7JsrPwnlzEhZNf%2FTxEqqJU%3D&amp;st=2018-01-29T11%3A32%3A53Z&amp;se=2018-01-29T14%3A35%3A53Z&amp;sp=r"
                  alt="Mennatallah Elsayed"
                  className="DiscussionContainer__Add__UserImage"
                />
              </a>
              <div className="DiscussionContainer__Add__CommentContainer">
                <div className="DiscussionContainer__Add__CommentContainer__Comment">
                  <div className="RichEditorComponent">
                    <div className="RichEditorComponent__Editor">
                      <div className="DraftEditor-root">
                        <div className="public-DraftEditorPlaceholder-root">
                          <div
                            className="public-DraftEditorPlaceholder-inner"
                            id="placeholder-2iloe">
                            <span>Write a comment</span>
                          </div>
                        </div>
                        <div className="DraftEditor-editorContainer">
                          <div
                            aria-autocomplete="list"
                            aria-describedby="placeholder-2iloe"
                            aria-expanded="true"
                            className="notranslate public-DraftEditor-content"
                            contentEditable="true"
                            role="combobox"
                            spellCheck="false">
                            <div data-contents="true">
                              <div
                                className=""
                                data-block="true"
                                data-editor="2iloe"
                                data-offset-key="ahh0k-0-0">
                                <div
                                  data-offset-key="ahh0k-0-0"
                                  className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr">
                                  <span data-offset-key="ahh0k-0-0">
                                    <br data-text="true" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="DiscussionContainer__Add__CommentContainer__SubmitContainer">
                  <Button type="hub-button hub-primary" title="Post" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PostApproval__Content__Post__Suffix" />
    </div>
  );
};

export default Playground;
