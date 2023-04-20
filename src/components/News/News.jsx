import React from "react";
import s from './News.module.css'

const News = () => {
    return <div>
        <div>
            <img
                src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/%D0%9F%D0%B0%D1%80%D0%BA%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9IMGWorldsofAdventure.webp"
                alt=""
            />
        </div>

        <div>
            <img
                src="https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs"
                alt=""
            />
            <div>Description</div>
        </div>
        <div>
            {" "}
            My Posts
            <div>
                New Post
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
            </div>
        </div>
    </div>
}

export default News