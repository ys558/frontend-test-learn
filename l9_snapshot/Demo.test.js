import { generateConfig, generateAnotherConfig } from "./Demo";

test("测试 generateConfig 函数", () => {
  expect(generateConfig())
    // 如果是一般的配置文件测试, 这种写法显得啰嗦: 拷贝Demo.js的代码:
    // .toEqual({
    //   server: 'http://localhost',
    //   port: 8080,
    // })

    // 用toMatchSnapshot测试配置文件: 如果配置文件部分有改动, 则会不通过测试用例
    .toMatchSnapshot({
      // time为日期对象,是变化的, 所以此处直接写:
      time: expect.any(Date),
    });
  // 假如配置文件新加入东西又要通过测试用例, 应在控制台按 w, 选择 u 即可以定格新的快照
});

test("行内测试快照 须先安装:npm install prettier", () => {
  // 需配合prettier完成:
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
