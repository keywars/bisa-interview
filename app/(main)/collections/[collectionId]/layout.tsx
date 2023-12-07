import React from "react";

interface CollectionDetailLayoutProps {
  children: React.ReactNode;
  params: {
    collectionId: string;
  };
}

const CollectionDetailLayout = async ({
  children,
  params: { collectionId },
}: CollectionDetailLayoutProps) => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto px-3 lg:space-x-7">
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
};

export default CollectionDetailLayout;
