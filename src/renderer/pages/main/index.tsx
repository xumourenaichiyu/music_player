/*
 * @Author: xumourenaichiyu
 * @Date: 2023-04-11 21:29:02
 * @LastEditTime: 2023-04-11 23:21:32
 */
import classNames from 'classnames';
import Style from './index.less';
const Main = () => {
  console.log(Style)
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