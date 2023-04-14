/*
 * @Author: xu
 * @Date: 2022-09-28 17:10:41
 * @LastEditTime: 2023-03-28 20:54:58
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
// const builder = require('electron-builder');
// const path = require('path');
// const Platform = builder.Platform;
// builder.build({
//     targets: Platform.WINDOWS.createTarget(),
//     config: {
//         productName: 'T-MUSIC',
//         directories: {
//             output: 'D:/T-MUSIC'
//         },
//         win: {
//             icon: path.resolve(__dirname, './src/main/favicon.ico'),
//             target: [
//                 {
//                     target: 'nsis',
//                     arch: [
//                         'x64'
//                     ],
                    
//                 }
//             ]
//         },
//         nsis: {
//             oneClick: false,
//             allowElevation: true,
//             allowToChangeInstallationDirectory: true,
//             createDesktopShortcut: true,
//             createStartMenuShortcut: true,
//             deleteAppDataOnUninstall: true
//         },
//         asar: false
//     },
//     projectDir: path.join(__dirname,'./dist'),
// }).then(() => {
//     console.log('应用构建成功');
// }).catch(err => {
//     console.log(`应用构建失败，失败原因：${err}`);
// })