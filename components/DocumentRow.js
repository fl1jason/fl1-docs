import { useState } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const DocumentRow = ({ id, fileName, date }) =>{

    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);

    const onOpenDoc = () =>{
        setAnchorEl(null);
        router.push(`/doc/${id}`)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
        
    return (
        <div 
            className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-sm cursor-pointer"
            >
            <Icon name="article" size="3xl" color="blue" />
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="border-0"
                onClick={handleClick}
                >
                    <Icon name="more_vert" size="3xl" />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={onOpenDoc}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Download</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Share</MenuItem>
            </Menu>
        </div>
    );
};

export default DocumentRow;
