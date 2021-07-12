import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signIn, signOut, getSession, useSession } from 'next-auth/client'

const Header = ()=>{

    const [ session ] = useSession()   
    const placeholder = `Search within ${session.user.name}'s folder`;
    
    return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white ">
        <Button 
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="h-20 w-20 border-0"
        >
            <Icon name="menu" size="3xl" />
        </Button>
        <img 
            loading="lazy"
            onClick={signOut}
            className="cursor-pointer h-12 w-12 ml-2 mr-5"
            alt=""
            src='https://hub.fl1digital.com/wp-content/uploads/2018/04/fl1-logo.png'
            />
        <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl px-2">
            FL1 Docs
        </h1>
        <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
            <Icon name="search" size="3xl" color="gray" />
            <input type="text" placeholder={placeholder} className="flex-grow px-5 text-sm bg-transparent outline-none" />
        </div>
        <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="md:ml-5 md:ml-20 h-20 w-20 border-0">
            <Icon name="apps" size="3xl" color="gray" />
        </Button>
        <img 
            loading="lazy"
            onClick={signOut}
            className="cursor-pointer h-12 w-12 rounded-full ml-2 md:mr-5"
            alt=""
            src={session?.user?.image}
            />
            
    </div>
    );
}

export default Header