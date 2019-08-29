import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// register globally
Vue.component('svg-icon', SvgIcon);
const requireAll = requireContext => requireContext.keys().map(requireContext)

//require.context 用来引入svg 文件下的 svg 文件 false 表示不进入子文件。
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
