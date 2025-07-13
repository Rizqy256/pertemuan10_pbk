import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'

describe('ProductCard.vue', () => {
  const productMock = {
    id: 1,
    name: 'Sabun RAMArt',
    price: 15000,
    image: 'https://via.placeholder.com/200'
  }

  it('menampilkan nama dan harga produk', () => {
    const wrapper = mount(ProductCard, {
      props: { product: productMock }
    })

    expect(wrapper.text()).toContain('Sabun RAMArt')
    expect(wrapper.text()).toContain('Rp15.000')
  })

  it('memicu event saat tombol diklik', async () => {
    const wrapper = mount(ProductCard, {
      props: { product: productMock }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()['add-to-cart']).toBeTruthy()
    expect(wrapper.emitted()['add-to-cart'][0]).toEqual([productMock])
  })
})
