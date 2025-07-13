import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/store/cartStore'

describe('cartStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('menambahkan produk ke keranjang', () => {
    const cart = useCartStore()
    const product = { id: 1, name: 'RAMArt Mie Goreng', price: 3000 }

    cart.addToCart(product)

    expect(cart.items.length).toBe(1)
    expect(cart.items[0].quantity).toBe(1)
  })

  it('menambahkan produk yang sama menaikkan quantity', () => {
    const cart = useCartStore()
    const product = { id: 2, name: 'RAMArt Susu', price: 5000 }

    cart.addToCart(product)
    cart.addToCart(product)

    expect(cart.items.length).toBe(1)
    expect(cart.items[0].quantity).toBe(2)
  })

  it('menghapus produk dari keranjang', () => {
    const cart = useCartStore()
    const product = { id: 3, name: 'RAMArt Teh', price: 2000 }

    cart.addToCart(product)
    cart.removeFromCart(3)

    expect(cart.items.length).toBe(0)
  })

  it('mengosongkan keranjang', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 4, name: 'A', price: 1000 })
    cart.addToCart({ id: 5, name: 'B', price: 2000 })
    cart.clearCart()

    expect(cart.items.length).toBe(0)
  })
})
