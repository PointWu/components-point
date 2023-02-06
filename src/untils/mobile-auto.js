// 检查是否是移动设备
export const checkMobile = () => {
    let check = false
    check = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
    if(check == null){
        check = true
    }
    if (window.innerWidth > 1260) {
        check = false
    }
    return check
}
 
// 适配移动设备进行缩放
export const mobileScale = () => {
    const designWidth = 1260 
    const scale = window.innerWidth / designWidth
    const translate = ((window.innerWidth - designWidth) / 2 / window.innerWidth) * 100
    return `scale(${scale}) translate(${translate}%, ${translate}%)`
}