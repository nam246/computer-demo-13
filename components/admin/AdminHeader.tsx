import { Button } from "../ui/button";

export default function AdminHeader({ title, btn: { isShow, url, btnValue } }: { title: string, btn: { isShow: boolean, url: string, btnValue: string } }) {

    return (
        <div className="flex justify-between items-start py-5">
            <div className="text-4xl font-bold">{title}</div>
            {

                isShow == true ?
                    <Button>
                        <a href={url}>
                            <i className="fa-solid fa-plus"></i> {btnValue}
                        </a>
                    </Button>
                    :
                    <a href=""></a>
            }
        </div>
    )
}