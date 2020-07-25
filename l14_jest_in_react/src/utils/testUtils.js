// 封装findTestWrapper方法, 用于选择到component里对应的组件:
export const findTestWrapper = (wrapper, tag) => wrapper.find(`[bddtest='${tag}']`)