import Container from "@/components/ui/Container"
import PageWrapper from "@/components/ui/PageWrapper"
import { BREADCRUMBS_CART } from "./Cart.constants"
import { Button, Checkbox, Input } from "@heroui/react"
import Image from "next/image"
import { FaHeart, FaMinus, FaPlus, FaTrash } from "react-icons/fa6"

const Cart = () => {
    return (
        <Container>
            <PageWrapper
                breadcrumbs={BREADCRUMBS_CART}
                title="Shopping Cart"
            >
                <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-5">
                    <div className="flex flex-col gap-5 w-full lg:w-[60%]">
                        <div className="flex justify-between border-black/20 p-5 rounded-[8px] border-[0.5px]">
                            <Checkbox defaultSelected>Select All</Checkbox>
                            <Button
                                color="danger"
                                variant="light"
                                className="text-[22px] font-semibold"
                            >
                                Delete
                            </Button>
                        </div>

                        <div className="border-black/20 p-5 rounded-[8px] border-[0.5px] flex flex-col gap-10">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Checkbox defaultSelected />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="hidden lg:flex items-center gap-4">
                                        <Image
                                            alt="HeroUI hero Image with delay"
                                            height={65}
                                            src="/images/banners/product-1.jpg"
                                            width={65}
                                            className="flex-shrink-0"
                                        />

                                        {/* min-w-[200px] */}
                                        <div className="flex-1 w-[40%]">
                                            <h1 className="text-[22px] font-medium leading-tight">
                                                Hikvision Wireless Outdoor Sounder DS-PS1-E-WB
                                            </h1>
                                        </div>

                                        <div className="flex flex-col justify-end items-end gap-5 w-[60%]">
                                            <div className="w-full">
                                                <p className="font-bold text-[25px] text-primary text-right">
                                                    $79.00
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-[28px]">
                                                <div className="flex gap-[15px]">
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

                                                <div className="w-[182px] h-[50px] bg-secondary/10 rounded-full flex items-center justify-between">
                                                    <Button
                                                        color="default"
                                                        variant="light"
                                                        isIconOnly
                                                        className="font-medium rounded-full"
                                                    >
                                                        <FaMinus />
                                                    </Button>
                                                    {1}
                                                    <Button
                                                        color="default"
                                                        variant="light"
                                                        isIconOnly
                                                        className="font-medium rounded-full"
                                                    >
                                                        <FaPlus />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:hidden">
                                        <div className="mb-4">
                                            <Image
                                                alt="HeroUI hero Image with delay"
                                                height={50}
                                                src="/images/banners/product-1.jpg"
                                                width={50}
                                                className="flex-shrink-0 mb-3"
                                            />

                                            <div>
                                                <h1 className="text-[18px] sm:text-[20px] font-medium leading-tight">
                                                    Hikvision Wireless Outdoor Sounder DS-PS1-E-WB
                                                </h1>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <div>
                                                <p className="font-bold text-[20px] sm:text-[22px] text-primary">
                                                    $79.00
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                <div className="flex gap-[15px]">
                                                    <Button
                                                        color="default"
                                                        variant="light"
                                                        isIconOnly
                                                        className="font-medium w-10 h-10"
                                                    >
                                                        <FaHeart />
                                                    </Button>
                                                    <Button
                                                        color="default"
                                                        variant="light"
                                                        isIconOnly
                                                        className="font-medium w-10 h-10"
                                                    >
                                                        <FaTrash />
                                                    </Button>
                                                </div>

                                                <div className="w-full sm:w-[150px] h-[45px] bg-secondary/10 rounded-full flex items-center justify-between px-2">
                                                    <Button
                                                        color="default"
                                                        variant="light"
                                                        isIconOnly
                                                        className="font-medium rounded-full w-8 h-8"
                                                    >
                                                        <FaMinus />
                                                    </Button>
                                                    <span className="text-sm font-medium">1</span>
                                                    <Button
                                                        color="default"
                                                        variant="light"
                                                        isIconOnly
                                                        className="font-medium rounded-full w-8 h-8"
                                                    >
                                                        <FaPlus />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between flex-col md:flex-row gap-[16px] items-center">
                            <Button radius="full" className="bg-primary px-[43px] py-[17px] text-white text-[18px] w-full md:w-auto font-semibold">
                                Back to Product
                            </Button>

                            <div className="flex gap-[16px] w-full md:w-auto">
                                <Input
                                    radius="full"
                                    width={361}
                                    placeholder="Enter your cupon"
                                />
                                <Button radius="full" variant="bordered" className="text-primary px-[43px] py-[17px] border-primary text-[18px] font-semibold border-[1px]">
                                    Apply
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="border-black/20 p-5 rounded-[8px] border-[0.5px] w-full lg:w-[40%] lg:sticky lg:top-5">
                        <div className="flex flex-col gap-5 mb-6">
                            <h1 className="text-[25px] font-semibold">Summary Cart</h1>

                            <div className="flex justify-between">
                                <h2 className="text-[22px] font-medium">
                                    Subtotal
                                </h2>

                                <p className="text-[22px] font-medium">
                                    $12.0
                                </p>
                            </div>
                        </div>

                        <div className="py-5 border-y-[1px] border-cyan-600">
                            <p>
                                Enter your address to view shipping options.
                            </p>
                        </div>

                        <div className="flex justify-between my-6">
                            <h2 className="text-[22px] font-bold text-primary">
                                Total
                            </h2>

                            <p className="text-[22px] font-bold text-primary">
                                $12.0
                            </p>
                        </div>

                        <div className="flex justify-center items-center">
                            <Button radius="full" className="bg-primary px-[65px] py-[17px] text-white text-[20px] w-full md:w-auto font-semibold">
                                Proceed to Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </Container>
    )
}

export default Cart