import { getCollectionProducts } from 'lib/bagisto';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: '' });
  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="hiddenScrollBar w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product?.urlKey}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.urlKey}`} className="relative h-full w-full">
              <GridTileImage
                alt={product?.name || 'product image'}
                label={{
                  title: product?.name || '',
                  amount: product?.priceHtml?.finalPrice || product?.priceHtml?.regularPrice || '0',
                  currencyCode: product?.priceHtml?.currencyCode
                }}
                src={product?.images?.at(0)?.url || ''}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
