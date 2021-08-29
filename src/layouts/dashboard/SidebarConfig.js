import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import bitcoinFill from '@iconify/icons-akar-icons/bitcoin-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={32} height={32} />;

const sidebarConfig = [
  {
    title: 'genel',
    path: '/general',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'fiyatlar',
    path: '/price',
    icon: getIcon(bitcoinFill)
  },
  {
    title: 'borsalar',
    path: '/exchange',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'haberler',
    path: '/news',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
