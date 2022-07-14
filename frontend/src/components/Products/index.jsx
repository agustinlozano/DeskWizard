import ProductCard from '../ProductCard'
import './products.css'

const Products = () => {
  const productData = [
    {
      name: 'Free',
      path: 'src\\images\\free.png',
      value: 0,
      description: 'Yes! You can provide tickets for your clients faster and free right here.'
    },
    {
      name: 'Pro',
      path: 'src\\images\\pro.png',
      value: 1,
      description: 'Take the power of a PRO and sell your products like a Jedi for just one dollar.'
    },
    {
      name: 'Business',
      path: 'src\\images\\business.png',
      value: 3,
      description: 'You have many sales and clients, get this plan and build an empire!'
    }
  ]

  return (
    <div className='product-list'>
      <section className='heading'>
        <h2>This is the pricing for our products</h2>
        <p>Choose the plan that best suits you!</p>
      </section>

      <section
        className='pricing'
        style={{ gap: '20px' }}
      >
        {productData.map((product) =>
          <ProductCard
            key={product.name}
            name={product.name}
            path={product.path}
            value={product.value}
            description={product.description}
          />
        )}
      </section>
    </div>
  )
}

export default Products
