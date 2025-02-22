import WebApp from "@twa-dev/sdk";

const AccountAge = () => {
    const id = WebApp.initDataUnsafe.user?.id;
    const coin = [
        1000, 2000, 3000, 4000
    ]
    const estimateTelegramAge = (id: number) => {
        const referenceID = 1965864245; // Known user ID from 2020
        const referenceYear = 2020;
        const idGrowthPerYear = 1000000000; // Estimated growth rate of IDs per year

        const estimatedYear = referenceYear + (id - referenceID) / idGrowthPerYear;
        const currentYear = new Date().getFullYear();
        const age = currentYear - Math.floor(estimatedYear);
        const rewards = coin[age];
        console.log(`reward is ${rewards}`);

        return age;

    };

    // Example Usage
    console.log(`Your Telegram account is approximately ${estimateTelegramAge(Number(id))}.`);

    return (
        <div>
            <p>User id: {id}</p>
            <p>Rewards: {`reward is ${coin[estimateTelegramAge(Number(id))]}`}</p>
            <p>Age: {`Age is ${estimateTelegramAge(Number(id))}`}</p>
        </div>
    );
};

export default AccountAge;