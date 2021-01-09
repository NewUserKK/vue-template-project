import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MainPage from "@/view/views/MainPage.vue";

describe('MainPage.vue', () => {
  it('renders main page text', () => {
    const msg = 'Main page'
    const wrapper = shallowMount(MainPage)
    expect(wrapper.text()).to.include(msg)
  })
})
