/*
 * @Author: xumourenaichiyu
 * @Date: 2023-04-11 21:29:02
 * @LastEditTime: 2023-04-16 22:08:24
 */
import classNames from 'classnames';
import Style from './index.less';
import { useEffect } from 'react';
import { readdirSync } from 'fs';
const Main = () => {
  useEffect(() => {
    getLocalMusics();
  },[])

  const getLocalMusics = async (path?: string) => {
    if(!path) {
      const dirs = await readdirSync('D:/', {encoding: 'utf-8'});
      console.log(dirs);
    }
  }
  return <div className={Style.music_main}>
    <div className={classNames('app_drag', Style.top_bar)}>
      <div className={Style.title}></div>
      <div className={Style.search_input_wrap}>
        <input className={classNames(Style.search_input, 'app_no_drag')} />
      </div>
    </div>
    <div className={Style.music_list}>
    
    </div>
  </div>
}

export default Main;