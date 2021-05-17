import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends, barOptions, barLegends,
} from '../utils/demo/chartsData'

function Dashboard() {


  return (
    <>
      <PageTitle>Dashboard</PageTitle>


      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">


        <InfoCard title="Ingresos" value="$ 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Ventas" value="376">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>



        <InfoCard title="Pedidos completados" value="35">
          <RoundIcon
              icon={ChatIcon}
              iconColorClass="text-teal-500 dark:text-teal-100"
              bgColorClass="bg-teal-100 dark:bg-teal-500"
              className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pedidos completados" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-6">
        <div class="col-span-1 lg:col-span-3  ">
          <ChartCard title="Ventas historicas">
            <Line {...lineOptions} />
            <ChartLegend legends={lineLegends} />
          </ChartCard>
        </div>

        <div className="col-span-1 lg:col-span-3">
        <ChartCard title="Ingresos vs costos de operación">
          <Bar {...barOptions} />
          <ChartLegend legends={barLegends} />
        </ChartCard>
        </div>


      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-6">
        <div className="col-span-1 lg:col-span-2  ">
          <ChartCard title="Productos más vendidos" class="h-68  content-center"  >
            <Doughnut {...doughnutOptions} />
            <ChartLegend legends={doughnutLegends}/>
          </ChartCard>
        </div>

        <div className="col-span-1 lg:col-span-2 ">
          <ChartCard title="Día preferido">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>

        <div className="col-span-1 lg:col-span-2  ">
          <ChartCard title="Horario preferido">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>


      </div>



    </>
  )
}

export default Dashboard
