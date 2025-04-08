'use client';
import { useRouter } from 'next/navigation';
import { dataSite, navData } from '@/data';
import { NavbarV2 } from 'ecommerce-mxtech';

const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarV2
      linksProps={{
        variant: 'button',
        align: 'left',
      }}
      variant='sticky'
      textColor='black'
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: 'w-36',
      }}
      styleTitle={{
        fontWeight: 'bold',
        fontSize: 16,
      }}
      links={navData}
      onClickProduct={(product) => {
        router.push(`/product/${product.id}`);
      }}
      buttonCartProps={{
        onClick: () => router.push('/my-cart'),
      }}
      buttonContactProps={{
        onClick: () => router.push('/more-information'),
      }}
      onRedirect={(path) => router.push(path)}
      onSearch={(value) => {}}
      stylesContentLink={{
        backgroundColor: 'rgb(182,180,90)',
        justifyContent: 'center',
        color: 'black',
      }}
    />
  );
};

export default Navbar;
