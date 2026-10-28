export class Weather {
    constructor(apiKey = "fab3309f7746a8ecb3a47a52c7c8325a") {
        this.apiKey = apiKey;
    }

    // 获取天气数据的异步方法 (使用 Ajax)
    fetchWeather(city) {
        return new Promise((resolve, reject) => {
            // 1. 创建一个Ajax对象
            const xhr = new XMLHttpRequest();
            // 拼接天气 API 地址
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&lang=zh_cn&appid=${this.apiKey}`;


            // 2. 设置回调函数
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    // 判断交互是否成功
                    if (xhr.status === 200) {
                        // 服务器响应成功，解析 JSON 数据
                        try {
                            const data = JSON.parse(xhr.responseText);
                            resolve(data);
                        } catch (err) {
                            reject(new Error("数据解析失败"));
                        }
                    } else {
                        // 失败，根据响应码判断失败原因
                        if (xhr.status === 404) {
                            reject(new Error("City not found."));
                        } else {
                            reject(new Error(`请求失败，状态码: ${xhr.status}`));
                        }
                    }
                }
            };

            // 处理网络错误
            xhr.onerror = () => {
                reject(new Error("网络请求失败"));
            };

            // 3. 使用 open 方法与服务器建立连接

            xhr.open("GET", url, true);

            // 4. 使用 send 方法发送请求
            xhr.send();
        });
    }
}