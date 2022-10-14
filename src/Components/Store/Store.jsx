import React, {useState} from 'react';
import {IconSwitch} from "./IconSwitch/IconSwitch";
import {CardsView} from "./View/CardsView";
import {ListView} from "./View/ListView";
import view_list from "./icon/view_list.svg";
import view_module from "./icon/view_module.svg";

export const Store = ({products}) => {

    const [changeView, setChangeView] = useState(view_list)

    const switchIcon = (flag) => {
        if (flag % 2 === 0) setChangeView(view_module)
        else setChangeView(view_list)
    }

    return (
        <div >
            <IconSwitch icon={changeView} onSwitch={switchIcon}/>
            {changeView === view_list? <CardsView cards={products}/> : <ListView items={products}/>}
        </div>
    );
}

