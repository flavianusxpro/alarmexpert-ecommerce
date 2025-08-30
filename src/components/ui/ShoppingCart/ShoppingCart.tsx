import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    Card,
    CardBody,
    Image,
} from "@heroui/react";
import React from "react";
import { FaHeart, FaTrash } from "react-icons/fa6";

interface PropTypes {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    triggerButton: React.ReactNode;
}

const ShoppingCart = ({ isOpen, onOpenChange, triggerButton }: PropTypes) => {
    return (
        <>
            {triggerButton}
            <Modal
                isOpen={isOpen}
                backdrop="blur"
                onOpenChange={onOpenChange}
                classNames={{
                    base: "!m-0 w-[600px] !right-0 !top-0 fixed rounded-none max-h-screen h-screen",
                    wrapper: "!items-start !justify-end !p-0",
                }}
                motionProps={{
                    variants: {
                        enter: {
                            x: 0,
                            opacity: 1,
                            transition: { duration: 0.3, ease: "easeOut" },
                        },
                        exit: {
                            x: "100%",
                            opacity: 0,
                            transition: { duration: 0.2, ease: "easeIn" },
                        },
                    },
                }}
            >
                <ModalContent className="h-screen w-full flex flex-col !rounded-none">
                    {(onClose) => (
                        <>
                            <ModalHeader className="border-b p-4 font-bold text-lg flex-shrink-0">
                                <h1 className="text-xl font-bold">Shopping Cart</h1>
                            </ModalHeader>

                            <ModalBody className="flex-1 overflow-y-auto p-4 min-h-0">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <Card
                                            isBlurred
                                            className="border-none bg-background/60 dark:bg-default-100/50 w-full"
                                            shadow="sm"
                                        >
                                            <CardBody>
                                                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 justify-start">
                                                    <div className="relative col-span-6 md:col-span-4">
                                                        <Image
                                                            alt="Smart Lock Pro"
                                                            className="object-cover"
                                                            height={200}
                                                            shadow="sm"
                                                            src="https://heroui.com/images/album-cover.png"
                                                            width="100%"
                                                        />
                                                    </div>

                                                    <div className="flex flex-col justify-between col-span-6 md:col-span-8 h-[200px]">
                                                        <div className="flex flex-col gap-5 text-xl font-bold">
                                                            <h1 className="text-[20px] font-semibold">
                                                                Smart Lock Pro
                                                            </h1>

                                                            <h2 className="text-[22px] font-semibold text-[#0A3353]">
                                                                $79.0
                                                            </h2>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <p className="text-[18px] font-medium">
                                                                1x item
                                                            </p>
                                                            <div className="flex gap-[20px]">
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaHeart />
                                                                </Button>
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaTrash />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>

                                    <div className="flex justify-between items-center border-b pb-2">
                                        <Card
                                            isBlurred
                                            className="border-none bg-background/60 dark:bg-default-100/50 w-full"
                                            shadow="sm"
                                        >
                                            <CardBody>
                                                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 justify-start">
                                                    <div className="relative col-span-6 md:col-span-4">
                                                        <Image
                                                            alt="Wireless Headphones"
                                                            className="object-cover"
                                                            height={200}
                                                            shadow="sm"
                                                            src="https://heroui.com/images/album-cover.png"
                                                            width="100%"
                                                        />
                                                    </div>

                                                    <div className="flex flex-col justify-between col-span-6 md:col-span-8 h-[200px]">
                                                        <div className="flex flex-col gap-5 text-xl font-bold">
                                                            <h1 className="text-[20px] font-semibold">
                                                                Wireless Headphones
                                                            </h1>

                                                            <h2 className="text-[22px] font-semibold text-[#0A3353]">
                                                                $159.0
                                                            </h2>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <p className="text-[18px] font-medium">
                                                                1x item
                                                            </p>
                                                            <div className="flex gap-[20px]">
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaHeart />
                                                                </Button>
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaTrash />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>

                                    <div className="flex justify-between items-center border-b pb-2">
                                        <Card
                                            isBlurred
                                            className="border-none bg-background/60 dark:bg-default-100/50 w-full"
                                            shadow="sm"
                                        >
                                            <CardBody>
                                                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 justify-start">
                                                    <div className="relative col-span-6 md:col-span-4">
                                                        <Image
                                                            alt="Smartphone Case"
                                                            className="object-cover"
                                                            height={200}
                                                            shadow="sm"
                                                            src="https://heroui.com/images/album-cover.png"
                                                            width="100%"
                                                        />
                                                    </div>

                                                    <div className="flex flex-col justify-between col-span-6 md:col-span-8 h-[200px]">
                                                        <div className="flex flex-col gap-5 text-xl font-bold">
                                                            <h1 className="text-[20px] font-semibold">
                                                                Smartphone Case Premium
                                                            </h1>

                                                            <h2 className="text-[22px] font-semibold text-[#0A3353]">
                                                                $29.0
                                                            </h2>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <p className="text-[18px] font-medium">
                                                                2x item
                                                            </p>
                                                            <div className="flex gap-[20px]">
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaHeart />
                                                                </Button>
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaTrash />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>

                                    <div className="flex justify-between items-center border-b pb-2">
                                        <Card
                                            isBlurred
                                            className="border-none bg-background/60 dark:bg-default-100/50 w-full"
                                            shadow="sm"
                                        >
                                            <CardBody>
                                                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 justify-start">
                                                    <div className="relative col-span-6 md:col-span-4">
                                                        <Image
                                                            alt="Bluetooth Speaker"
                                                            className="object-cover"
                                                            height={200}
                                                            shadow="sm"
                                                            src="https://heroui.com/images/album-cover.png"
                                                            width="100%"
                                                        />
                                                    </div>

                                                    <div className="flex flex-col justify-between col-span-6 md:col-span-8 h-[200px]">
                                                        <div className="flex flex-col gap-5 text-xl font-bold">
                                                            <h1 className="text-[20px] font-semibold">
                                                                Bluetooth Speaker Portable
                                                            </h1>

                                                            <h2 className="text-[22px] font-semibold text-[#0A3353]">
                                                                $89.0
                                                            </h2>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <p className="text-[18px] font-medium">
                                                                1x item
                                                            </p>
                                                            <div className="flex gap-[20px]">
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaHeart />
                                                                </Button>
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaTrash />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>

                                    <div className="flex justify-between items-center border-b pb-2">
                                        <Card
                                            isBlurred
                                            className="border-none bg-background/60 dark:bg-default-100/50 w-full"
                                            shadow="sm"
                                        >
                                            <CardBody>
                                                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 justify-start">
                                                    <div className="relative col-span-6 md:col-span-4">
                                                        <Image
                                                            alt="USB Cable"
                                                            className="object-cover"
                                                            height={200}
                                                            shadow="sm"
                                                            src="https://heroui.com/images/album-cover.png"
                                                            width="100%"
                                                        />
                                                    </div>

                                                    <div className="flex flex-col justify-between col-span-6 md:col-span-8 h-[200px]">
                                                        <div className="flex flex-col gap-5 text-xl font-bold">
                                                            <h1 className="text-[20px] font-semibold">
                                                                USB-C Cable Fast Charging
                                                            </h1>

                                                            <h2 className="text-[22px] font-semibold text-[#0A3353]">
                                                                $19.0
                                                            </h2>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <p className="text-[18px] font-medium">
                                                                3x item
                                                            </p>
                                                            <div className="flex gap-[20px]">
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaHeart />
                                                                </Button>
                                                                <Button
                                                                    color="default"
                                                                    variant="light"
                                                                    isIconOnly
                                                                    className="font-medium"
                                                                >
                                                                    <FaTrash />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </ModalBody>

                            <div className="border-t p-4 flex-shrink-0">
                                <div className="mb-4 flex justify-between">
                                    <div className="flex items-center">
                                        <span className="text-xl font-bold">Total :</span>&nbsp;
                                        <span className="text-xl font-bold text-[#0A3353]">$375.0</span>
                                    </div>
                                     <Button radius="full" variant="bordered" className="text-black px-[20px] py-[10px] border-[#000000]/20 text-[16px] font-medium border-[0.5px]" onPress={onClose}>
                                        Clear all items
                                    </Button>
                                </div>

                                <div className="flex justify-between gap-[20px]">
                                    <Button radius="full" variant="bordered" className="text-[#0A3353] px-[65px] py-[15px] border-[#0A3353] text-[20px] font-semibold border-[1px]" onPress={onClose}>
                                        View Chart
                                    </Button>
                                    
                                     <Button radius="full" variant="solid" className="text-white px-[65px] py-[15px] bg-[#0A3353] text-[20px] font-semibold border-[1px]" onPress={onClose}>
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default ShoppingCart;