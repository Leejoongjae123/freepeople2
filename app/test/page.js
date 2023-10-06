import React from "react";
import './test.css'
export default function page() {
    
  
  return (
    
  <>
   <div class="w-full relative container mx-auto py-8">
      <div className="table-container">
      <table class="w-full table-auto border-collapse border border-gray-500">
            <thead>
                <tr>
                    <th class="border border-gray-500 px-4 py-2">Header 1</th>
                    <th class="border border-gray-500 px-4 py-2">Header 2</th>
                    <th class="border border-gray-500 px-4 py-2">Header 3</th>
                    <th class="border border-gray-500 px-4 py-2">Header 4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-gray-500 px-4 py-2"><a className="z-10" target="_blank" href="https://www.naver.com">Row 1, Cell 1</a></td>
                    <td class="border border-gray-500 px-4 py-2">Row 1, Cell 2</td>
                    <td class="border border-gray-500 px-4 py-2"><a target="_blank" href="https://www.naver.com">Row 1, Cell 1</a></td>
                    <td class="border border-gray-500 px-4 py-2">Row 1, Cell 4</td>
                </tr>
                <tr>
                    <td class="border border-gray-500 px-4 py-2">Row 2, Cell 1</td>
                    <td class="border border-gray-500 px-4 py-2">Row 2, Cell 2</td>
                    <td class="border border-gray-500 px-4 py-2">Row 2, Cell 3</td>
                    <td class="border border-gray-500 px-4 py-2">Row 2, Cell 4</td>
                </tr>
                <tr>
                    <td class="border border-gray-500 px-4 py-2"><a target="_blank" href="https://www.naver.com">Row 1, Cell 1</a></td>
                    <td class="border border-gray-500 px-4 py-2">Row 3, Cell 2</td>
                    <td class="border border-gray-500 px-4 py-2">Row 3, Cell 3</td>
                    <td class="border border-gray-500 px-4 py-2"><a target="_blank" href="https://www.naver.com">Row 1, Cell 1</a></td>
                </tr>
            </tbody>
        </table>
      </div>
        
    </div>

  </>
    
  )
}
