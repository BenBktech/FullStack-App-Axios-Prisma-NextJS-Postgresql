const hasWallet = () => {
    return (
      typeof window !== "undefined" && typeof window.ethereum !== "undefined"
    );
  };
  
  export { hasWallet };
  