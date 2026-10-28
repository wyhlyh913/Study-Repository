import { Weather } from "./Weather.js";
import { updateUI } from "./UI.js";

// 1. 创建天气查询对象
const weatherApp = new Weather("fab3309f7746a8ecb3a47a52c7c8325a");

// 2. 获取页面元素
const input = document.querySelector(".search-bar");
const button = document.querySelector(".search button");
const loading = document.getElementById("loading");

// 3. 搜索天气
const search = async () => {
    const city = input.value.trim();

    // 判断输入是否为空
    if (!city) {
        alert("请输入城市名称");
        return;
    }

    // 显示加载状态
    if (loading) {
        loading.style.display = "block";
    }

    try {
        // 请求天气数据
        const data = await weatherApp.fetchWeather(city);

        // 更新页面
        updateUI(data);

    } catch (error) {
        // 处理请求失败
        console.error("天气查询失败：", error);
        alert(error.message || "天气查询失败，请稍后重试");

    } finally {
        // 无论成功还是失败，都隐藏加载状态
        if (loading) {
            loading.style.display = "none";
        }
    }
};

// 4. 监听搜索按钮
button.addEventListener("click", search);

// 5. 按 Enter 键搜索
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        search();
    }
});

// 6. 页面加载后，默认查询上海
window.addEventListener("load", async () => {
    input.value = "Shanghai";
    await search();

    // 初始化卡片倾斜效果（如果已引入 VanillaTilt）
    if (window.VanillaTilt) {
        const cards = document.querySelectorAll(".card");

        window.VanillaTilt.init(cards, {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.3
        });
    }
});
