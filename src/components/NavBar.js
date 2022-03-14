import home from '../assets/homewhite.png'
import msg from '../assets/msgwhite.png'
import setting from '../assets/setting.png'
import trading from '../assets/trading.png'
import cult from '../assets/cultnew.png'
function NavBar() {
    return (<div className=" h-2/3 top-20 absolute" >
        <div className=" text-xs text-cyan-800">s</div>
        <div className="w-20 ml-2  bg-gray-900   h-full text-white rounded-xl flex flex-col ">
            <div className=" m-2 mt-6">
                <img className="   h-16 w-20 -right-0 relative" src={cult}></img>

            </div>
            <div className=" m-2 mt-6">
                <img className=" w-8 h-8  -right-4 relative  " src={home}></img>

            </div>
            <div className=" m-2 mt-6">
                <img className="  w-8 h-8 -right-4 relative mt-1 " src={msg}></img>

            </div>
            <div className=" m-2 mt-6" >
                <img className="  w-8 h-8 -right-4 relative mt-1 " src={setting}></img>

            </div>
            <div className=" m-2 mt-6" >
                <img className="  w-8 h-8  -right-4 relative mt-1 " src={trading}></img>

            </div>

        </div>
    </div>
    );
}

export default NavBar;


