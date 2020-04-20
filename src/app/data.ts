import {COUNTRIES} from './@core/data/countries';

export const SELECTIONS = {
  sex: [{label: '男', value: '1'}, {label: '女', value: '0'}],
  BuyType: [{label: 'A', value: 'A'}, {label: 'B', value: 'B'}, {label: 'C', value: 'C'}, {label: 'D', value: 'D'}],
  BuidingType: [{label: '来电', value: '来电'}, {label: '去电', value: '去电'}, {label: '拓展', value: '拓展'}, {label: '来访', value: '来访'}],
  IDCardType: [{label: '身份证', value: '身份证'}, {label: '护照', value: '护照'}, {label: '军官证', value: '军官证'}, {label: '港澳通行证', value: '港澳通行证'},
    {label: '港澳台身份证', value: '港澳台身份证'}, {label: '回乡证', value: '回乡证'}, {label: '社保卡', value: '社保卡'}, {label: '营业执照', value: '营业执照'}],
  UserType: [{label: '个人', value: '个人'}, {label: '企业', value: '企业'}],
  UserStatus: [{label: '问询', value: '问询'}, {label: '看房', value: '看房'}],
  UserFrom: [{label: '自然来访', value: '自然来访'}, {label: '电话销售', value: '电话销售'}, {label: '楼盘广告', value: '楼盘广告'}],
  BuyUse: [{label: '自用', value: '自用'}, {label: '投资', value: '投资'}, {label: '为子女储备', value: '为子女储备'}, {label: '其他', value: '其他'}],
  BuyHouseType: [{label: '单间', value: '单间'}, {label: '一房', value: '一房'}, {label: '两房', value: '两房'}, {label: '三房', value: '三房'},
    {label: '四房', value: '四房'}, {label: '五房', value: '五房'}, {label: '六房及以上', value: '六房及以上'}, {label: '复式', value: '复式'},
    {label: '双拼别墅', value: '双拼别墅'}, {label: '叠拼别墅', value: '叠拼别墅'}, {label: '联排别墅', value: '联排别墅'}, {label: '独栋别墅', value: '独栋别墅'},
    {label: '车位', value: '车位'}, {label: '商铺', value: '商铺'}
  ],
  FollowUpType: [{label: '来电', value: '来电'}, {label: '来访', value: '来访'}, {label: '去电', value: '去电'}, {label: '认购', value: '认购'}],
  BuyHouseArea: [{label: '60平以下', value: '60平以下'}, {label: '60-70㎡', value: '60-70㎡'}, {label: '70-90㎡', value: '70-90㎡'},
    {label: '90-110㎡', value: '90-110㎡'}, {label: '110-125㎡', value: '110-125㎡'}, {label: '125-140㎡', value: '125-140㎡'},
    {label: '140-160㎡', value: '140-160㎡'}, {label: '160-180㎡', value: '160-180㎡'}, {label: '230-400㎡', value: '230-400㎡'},
    {label: '400-600㎡', value: '400-600㎡'}, {label: '600㎡以上', value: '600㎡以上'}
  ],
  ZYCS: [
    {label: '1次', value: '1'}, {label: '2次', value: '2'}, {label: '3次', value: '3'}, {label: '3次以上', value: '4'}
  ],
  HYZK: [{label: '未婚', value: '未婚'}, {label: '已婚', value: '已婚'}],
  JYCD: [{label: '大专', value: '大专'}, {label: '本科', value: '本科'}, {label: '研究生', value: '研究生'}, {
    label: '博士及以上',
    value: '博士及以上'
  }, {label: '其他', value: '其他'}],
  GZYS: [{label: '地段', value: '地段'}, {label: '装修标准', value: '装修标准'}, {label: '朝向', value: '朝向'}, {label: '价格', value: '价格'},
    {label: '周边环境', value: '周边环境'}, {label: '升值潜力', value: '升值潜力'}, {label: '交通', value: '交通'}, {label: '景观环境', value: '景观环境'},
    {label: '配套设施', value: '配套设施'}, {label: '教育配套', value: '教育配套'}, {label: '物业管理', value: '物业管理'}, {label: '开发商品牌', value: '开发商品牌'},
    {label: '户型设计', value: '户型设计'}],
  GFYS: [{label: '100万以下', value: '100万以下'}, {label: '100-150万', value: '100-150万'}, {label: '150-200万', value: '150-200万'},
    {label: '200-250万', value: '200-250万'}, {label: '250-300万', value: '250-300万'}, {label: '300-350万', value: '300-350万'},
    {label: '350-450万', value: '350-450万'}, {label: '450-500万', value: '450-500万'}, {label: '500-600万', value: '500-600万'},
    {label: '600-800万', value: '600-800万'}, {label: '800-1000万', value: '800-1000万'}, {label: '1000-1500万', value: '1000-1500万'},
    {label: '1500万以上', value: '1500万以上'}],
  NLD: [{label: '20以下', value: '20以下'}, {label: '20-25', value: '20-25'}, {label: '26-30', value: '26-30'},
    {label: '31-35', value: '31-35'}, {label: '36-40', value: '36-40'}, {label: '41-50', value: '41-50'}, {label: '51-60', value: '51-60'},
    {label: '60以上', value: '60以上'}],
  GJJD: [{label: '初次接触', value: '初次接触'}, {label: '初次来访', value: '初次来访'}, {label: '明确意向', value: '明确意向'},
    {label: '申请办理VIP', value: '申请办理VIP'}, {label: '来访跟进', value: '来访跟进'}, {label: '参观样板房', value: '参观样板房'},
    {label: '计价', value: '计价'}, {label: '已成交', value: '已成交'}],
  SSHY: [{label: '公务员', value: '公务员'}, {label: '企业白领/高管', value: '企业白领/高管'}, {label: '律师', value: '律师'}, {label: '个体户', value: '个体户'},
    {label: '国企员工', value: '国企员工'}, {label: '教师', value: '教师'}, {label: '金融', value: '金融'}, {label: '企事业', value: '企事业'},
    {label: '医生', value: '医生'}, {label: '其他', value: '其他'}],
  JTJG: [{label: '单身贵族', value: '单身贵族'}, {label: '两口之家', value: '两口之家'}, {label: '即将三口之家', value: '即将三口之家'},
    {label: '三口之家', value: '三口之家'}, {label: '四口之家', value: '四口之家'}, {label: '两代共住', value: '两代共住'}, {label: '三代同堂', value: '三代同堂'}],
  RZTJ: [{label: '业主介绍', value: '业主介绍'}, {label: '员工介绍', value: '员工介绍'}, {label: '朋友介绍', value: '朋友介绍'}, {label: '途经', value: '途经'},
    {label: '外展', value: '外展'}, {label: '活动', value: '活动'}, {label: '微信', value: '微信'}, {label: '媒体渠道', value: '媒体渠道'},
    {label: '个人拓客', value: '个人拓客'}, {label: '其他', value: '其他'}
  ],
  State: COUNTRIES
};

export const VALIDATORS = {
  身份证: [/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/],
  护照: [/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/],
  军官证: [/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/],
  港澳通行证: [/^([A-Z]\d{6,10}(\w1)?)$/],
  港澳台身份证: [/^([A-Z]\d{6,10}(\(\w\))?)$/, /^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/],
  回乡证: [/(H|M)(\d{10})$/],
  社保卡: [],
  营业执照: [/(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/]
};
