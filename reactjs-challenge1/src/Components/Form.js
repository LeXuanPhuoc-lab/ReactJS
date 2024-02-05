import React from 'react'
import Button from './Button';

const Form = ({ reqType, setReqType }) => {
    const USER_ENDPOINT = "users";
    const POST_ENDPOINT = "posts";
    const COMMENT_ENDPOINT = "comments";

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText={USER_ENDPOINT}
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText={POST_ENDPOINT}
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText={COMMENT_ENDPOINT}
                reqType={reqType}
                setReqType={setReqType}
            />
        </form>
    )
};

export default Form;
