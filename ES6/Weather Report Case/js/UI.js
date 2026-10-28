
export const updateUI = (data) => {
    // 1. 解构赋值：提取天气数据
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    // 2. 更新城市名称
    document.querySelector(".city").innerText = `Weather in ${name}`;

    // 3. 更新天气图标
    document.querySelector(".icon").src =
        `https://openweathermap.org/img/wn/${icon}.png`;

    // 4. 更新天气描述
    document.querySelector(".description").innerText = description;

    // 5. 更新温度、湿度和风速
    document.querySelector(".temp").innerText = `${temp}°C`;
    document.querySelector(".humidity").innerText = `湿度: ${humidity}%`;
    document.querySelector(".wind").innerText = `风速: ${speed} km/h`;

    // 6. 移除加载状态
    document.querySelector(".weather").classList.remove("loading");

    // 7. 根据城市切换背景图片
    document.body.style.backgroundImage =
        `url("https://picsum.photos/1600/900?${encodeURIComponent(name)}")`;
};
