import providerHomePage from "../Components/Provider/providerHomePage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import OrderHistoryPage from "../Pages/OrderHistoryPage/OrderHistoryPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import BookingPage from "../Pages/Service/BookingPage";

import TransactionHistoryPage from "../Pages/TransactionHistoryPage/TransactionHistoryPage";
import ServicePage from "../Pages/ServicePage";
import MyShopPage from "../Pages/MyShopPage/MyShopPage";
import CreateServicePage from "../Pages/CreateServicePage/CreateServicePage";
import ItemDetailPage from "../Pages/ItemDetailPage/ItemDetailPage";
import ProviderPage from "../Pages/Provider/ProviderPage";
import ProviderProfile from "../Pages/Provider/ProviderProfile";
import ProviderSecurity from "../Pages/Provider/ProviderSecurity";
import CustomerChangePasswordPage from "../Pages/CustomerChangePasswordPage"

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeaderFooter: true
        //show header and footer
    },
    {
        path: '/login',
        page: LoginPage
    },
    {
        path: '/register',
        page: RegisterPage
    },
    {
        path: '/profile',
        page: ProfilePage,
        isShowHeaderFooter: true
    },
    {
        path: '/order',
        page: OrderHistoryPage,
        isShowHeaderFooter: true
    },
    {
        path: '/transaction',
        page: TransactionHistoryPage,
        isShowHeaderFooter: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
    {
        path: '/service/*',
        page: ServicePage,
        isShowHeaderFooter: true
    },
    {
        path: '/my-shop',
        page: MyShopPage,
        isShowHeaderFooter: true
    },
    {
        path: '/order',
        page: OrderHistoryPage,
        isShowHeaderFooter: true
    },
    {
        path: '/createService',
        page: CreateServicePage,
        isShowHeaderFooter: true
    },
    {
        path: '/item-detail-page/:id',
        page: ItemDetailPage,
        isShowHeaderFooter: true
    },
    {
        path: '/change-password-customer',
        page: CustomerChangePasswordPage,
        isShowHeaderFooter: true
    },
    {
        path: '/provider',
        page: ProviderPage,
        isShowSidebarProvider: true
    },
    {
        path: '/provider-dashboard',
        page: ProviderPage,
        isShowSidebarProvider: true
    },
    {
        path: '/provider-profile',
        page: ProviderProfile,
        isShowSidebarProvider: true
    },
    {
        path: '/provider-change-password',
        page: ProviderSecurity,
        isShowSidebarProvider: true
    },
]