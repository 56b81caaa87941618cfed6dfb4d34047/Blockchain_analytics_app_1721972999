/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1721973033", {
    template: `
    <section id="items-table-component" class="py-8 bg-white">
        <h2 id="costs-title" class="text-lg font-semibold mb-5">Blockchain Analytics Tools</h2>
        <div id="costs-table-container" class="overflow-x-auto">
            <table id="costs-table" class="table-auto w-full text-sm">
                <thead id="costs-table-header" class="sr-only" id="costs-table-header">
                    <tr>
                        <th id="description-header">Description</th>
                        <th id="cost-header" scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody id="costs-table-body">
                    <tr class="group" :class="costsGradientStyle" id="costs-row-1" >
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg after:w-px after:h-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 group-hover:after:opacity-0 after:transition-opacity" id="costs-cell-description-1" :class="costsCellOneStyle">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" >
                                    On-Chain Data Explorer
                                </a>
                            </div>
                            <p :class="costsDescriptionStyle" id="costs-description-1">Explore transactions, addresses and smart contracts on multiple blockchains</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-1" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$99/month</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-1" >
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg after:w-px after:h-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 group-hover:after:opacity-0 after:transition-opacity" id="costs-cell-description-1" :class="costsCellOneStyle">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" >
                                    Smart Contract Auditor
                                </a>
                            </div>
                            <p :class="costsDescriptionStyle" id="costs-description-1">Automated security analysis to find vulnerabilities in smart contracts</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-1" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$199/audit</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-3">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-3">
                            <div class="font-semibold mb-0.5"  id="costs-link-3">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Token Metrics Dashboard</a>
                            </div>
                            <p :class="costsDescriptionStyle"  id="costs-description-3">See token distribution, liquidity, whale movements and more</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-3" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$49/month</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-4">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-4">
                            <div class="font-semibold mb-0.5"  id="costs-link-4">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Whale Tracking</a>
                            </div>
                            <p :class="costsDescriptionStyle"  id="costs-description-4">Track large holders and analyze their potential impact</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-4" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$29/month</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-5">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-5">
                            <div class="font-semibold mb-0.5"  id="costs-link-5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Network Stats Monitor</a>
                            </div>
                            <p :class="costsDescriptionStyle"  id="costs-description-5">Monitor chain metrics like hashrate, difficulty, fees in real-time</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-5" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$19/month</a>
                        </td>
                    </tr>
                    <tr class="group" :class="costsGradientStyle" id="costs-row-6">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-6">
                            <div class="font-semibold mb-0.5"  id="costs-link-6">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">ICO Due Diligence</a>
                            </div>
                            <p :class="costsDescriptionStyle"  id="costs-description-6">Comprehensive reports on new crypto fundraising projects</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition" id="costs-cell-cost-6" :class="[detailsGradientStyle, detailsGradientButtonStyle]">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$499/report</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot id="costs-table-footer">
                    <tr>
                        <th id="total-description" scope="row" class="relative text-left font-normal px-4 py-5">
                            <p id="total-description-text" class="italic" :class="costsTableFooterTotalDescriptionStyle">TOT in USD dollar</p>
                        </th>
                        <td id="total-cost" class="relative font-semibold text-right text-base underline px-4 py-5 w-[1%]" :class="costsTableFooterTotalCostStyle"> From $19/month</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
            costsGradientStyle: "odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900",
            costsCellOneStyle: "after:bg-slate-200 dark:after:bg-slate-800",
            costsDescriptionStyle: "text-slate-500 dark:text-slate-400",
            detailsGradientStyle: "after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50%",
            detailsGradientButtonStyle: "after:text-blue-500",
            costsTableFooterTotalCostStyle: "text-emerald-500",
            costsTableFooterTotalDescriptionStyle:"text-slate-500"
        };
    },
});
