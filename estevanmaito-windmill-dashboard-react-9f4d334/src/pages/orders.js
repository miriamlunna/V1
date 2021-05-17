import React, {useEffect, useState} from 'react'

import axios from "axios";

import PageTitle from '../components/Typography/PageTitle'
import moment from "moment"

import {
    Badge, Button,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHeader,
    TableRow
} from "@windmill/react-ui";



import {EditIcon, TrashIcon} from "../icons";

function Orders() {

    const [page, setPage] = useState(1)
    const [data, setData] = useState([])



    // pagination change control
    function onPageChange(p) {
        setPage(p)
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect( async () => {

        try {

            const resp = await axios({
                method: 'GET',
                url: '/order',
            })
            console.log("ORDERS:",resp.data)
            setData(resp.data)
            //setData(resp.slice((page - 1) * resultsPerPage, page * resultsPerPage))

        }catch (error){
            console.log(error)
        }

    }, [])

    // pagination setup
    const resultsPerPage = 10
    //const totalResults = data.length
    const totalResults =1

    return (
        <>
            <PageTitle> Pedidos </PageTitle>

            <TableContainer className="mb-8">
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>#Pedido</TableCell>
                            <TableCell>Producto</TableCell>
                            <TableCell>Dirección</TableCell>
                            <TableCell>Fecha Ingreso</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Fecha Entrega</TableCell>
                            <TableCell>Acciones </TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {data.map((order, i) => (
                            <TableRow key={i} >
                                <TableCell>
                                    <div className="text-sm">
                                        <div>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{order._id}</p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <span className="flex items-center text-sm">{order.lens}</span>
                                </TableCell>

                                <TableCell>
                                    <span className="flex items-center text-sm">{order.address}</span>
                                </TableCell>
                                <TableCell>
                                    <span  className="text-sm">{ moment(order.order_received_dateTime).format('l') }</span>
                                </TableCell>

                                <TableCell>
                                    <Badge type={"primary"}  className="text-sm" > {order.order_status }</Badge>
                                </TableCell>

                                <TableCell>
                                    <span className="text-sm">{ moment(order.order_shipment_promise).format('l')}</span>
                                </TableCell>


                                <TableCell>
                                    <div className="flex items-center space-x-4">
                                        <Button layout="link" size="icon" aria-label="Edit">
                                            <EditIcon className="w-5 h-5" aria-hidden="true" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                                            ))}
                    </TableBody>
                </Table>
                <TableFooter>
                    <Pagination
                        totalResults={totalResults}
                        resultsPerPage={resultsPerPage}
                        onChange={onPageChange}
                        label="Table navigation"
                    />
                </TableFooter>
            </TableContainer>

        </>
    )
}

export default Orders