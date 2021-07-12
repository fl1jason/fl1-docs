
import { signIn, signOut, getSession, useSession } from 'next-auth/client'
import Login from '../../components/Login'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { db } from '../../firebase';
import { useState } from "react";
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { useRouter } from "next/dist/client/router";
import TextEditor from "../../components/TextEditor"

const Document = () =>{
    const [ session ] = useSession()   
    if (!session) return (<Login />)

    const router = useRouter();
    const { id } = router.query;

    const [ snapshot, loadingSnapshot] = useDocumentOnce(
        db
          .collection('userDocs')
          .doc(session.user.email)
          .collection("docs")
          .doc(id)
        );

    if (!loadingSnapshot && !snapshot?.data()?.fileName){
        router.replace("/");
    }

    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() =>router.push('/')} className="cursor-pointer">
                    <Icon name="description" size="3xl" color="blue" />
                </span>
                
                <div className="flex-grow px-2">
                    <h2>{snapshot?.data()?.fileName}</h2>
                    <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
                        <p className="option">File</p>
                        <p className="option" >Edit</p>
                        <p className="option" >View</p>
                        <p className="option" >Insert</p>
                        <p className="option" >Format</p>
                        <p className="option" >Tools</p>
                    </div>
                </div>

                <Button
                    color="blue"
                    buttonType="filled"
                    size="regalar"
                    className="hidden md:inline-flex h-10"
                    rounded={false}
                    iconOnly={false}
                    block={false}
                    ripple="light"
                    >
                    <Icon name="people" size="md" />SHARE
                </Button>
                <img src={session.user.image} alt="" className="rounded-full cursor-pointer h-10 w-10 ml-2"/>
            </header>
            <TextEditor />
        </div>
    );
};

export default Document;

export async function getServerSideProps(context) {
    const session = await getSession(context)
  
    return {
      props: {
        session,
      }
    }
  }