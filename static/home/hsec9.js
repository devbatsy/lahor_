import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"


__SYD.hsec9_static_overlay_image = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'50px',background:'transparent',flexDirection:'row-reverse',justifyContent:'center' ,flexWrap:'wrap',columnGap:'10px',opacity:__p(['hsec9_static_overlay_image','animate'],false) ? '1' : '0'}})
        },
        [
            // __SYD.text_lib_type_h1_glob({cnt:"Choose Your Apartment Type",size:__p(['asec4_static_overlay_image','font'],'40px'),clr:'#b99d75',w:'700',inject:"text-align:left;width:100%;padding:5px 15px;padding-left:10px;"}),
            __c(
                'div',
                {
                    style:'height:80vw;max-height:500px;min-height:400px;min-width:300px;position:relative;overflow:hidden;',
                    class:'hsec8_static_overlay_image_child1 div_text_hover_feature'
                },
                [
                    __c(
                        'div',
                        {
                            style:`position:absolute;top:0;right:0;height:100%;width:100%;background-image:url("../assets/a4.webp");background-position:center 0;`,
                            class:`thin_border circle_ball_design ${__p(['hsec9_static_overlay_image','animate'],false) ? 'downSlide_animate' : ''}`
                        },[],{genericStyle:['bg_cover']}
                    ),
                    // __c(
                    //     'div',
                    //     {
                    //         style:`position:absolute;top:50%;right:20%;height:calc(100% - 50%);width:calc(100% - 20%);background-image:url("../assets/img.jpg");background-position:center 0;`,
                    //         class:'thin_border'
                    //     },[],{genericStyle:['bg_cover']}
                    // )
                ]
            ),
            __c(
                'div',
                {
                    style:'height:80vw;max-height:400px;min-height:300px;min-width:300px;text-align:center;' + __sC['page3FloatText']({method:'add',style:{padding:'0'}}),
                    class:`hsec8_static_overlay_image_child2 ${__p(['hsec9_static_overlay_image','animate'],false) ? 'left_incoming_css_animation' : ''}`
                },
                [
                    __c(
                        'div',
                        {
                            style:`font-size:${__p(['hsec9_static_overlay_image','font'],'40px') === '40px' ? '50px' : '25px'};font-weight:700;padding:5px;text-align:left;width:100%;color:#b99d75`
                        },
                        [
                            'Elegant Accommodations'
                        ]
                    ),
                    __c(
                        'p',
                        {
                            style:'font-size:16px;padding:5px;text-align:left;width:100%;line-height:25px;'
                        },
                        [
                            `At Lahor, we pride ourselves on providing a variety of accommodations that cater to both short-term and long-term guests. Our rooms and apartments are meticulously designed with modern furnishings, tasteful décor, and a range of amenities to ensure a pleasant stay. Enjoy spacious living areas, plush bedding, and contemporary bathrooms, all designed to offer you the comfort of home with a touch of elegance.`
                        ]
                    )
                ]
            )
        ],
        {
            mediaQuery:{
                query:[{size:'<650px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            },
            createState:{
                stateName:'hsec9_static_overlay_image',
                state:{font:'40px',animate:false,init_count:() =>{
                    const state = __g('hsec9_static_overlay_image');
                    state.animate = true;
                    __u('hsec9_static_overlay_image' , {type:'a' , value:state})
                }}
            }
        }
    )
}