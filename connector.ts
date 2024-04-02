import TonConnect from '@tonconnect/sdk';

export const connector = new TonConnect();

// Проверка в localStorage есть ли активная ссесия с wallet
connector.restoreConnection();
