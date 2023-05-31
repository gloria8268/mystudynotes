# FUNCTIONS
* SUMIF / SUMIFS / SUBTOTAL 
* 1. Year-on-year (YoY) or Year-over-year (YoY)
      Definition: It compares the data for a specific period with the data from the same period in the previous year.
      Formula: (Current Year Data - Previous Year Data) / Previous Year Data * 100
  2. Month-on-month (MoM) or Month-over-month (MoM)
      Definition: It compares the data for a specific period with the data from the previous period (usually the previous month).
      Formula: (Current Period Data - Previous Period Data) / Previous Period Data * 100
* 1. YEAR(serial_number) 
  2. MONTH(serial_number) 
  3. DAY(serial_number)
  4. DATE(year,month,day)  -  DATE(YEAR(B30),MONTH(B30),DAY(B30)) 
  
      | The 1st day of month      | The last day of month |
      | ----------- | ----------- |
      | date(year(),month(),1) | date(year(),month()+1,1)-1 |
      
       eg. Criteria **">="&DATE(YEAR(B30),MONTH(B30),1)**
* VLOOKUP
 1. =VLOOKUP(I96&"*",F96:G103,2,TRUE)
 2. =VLOOKUP(I99&"??",F95:G103,2,FALSE)
* 1. MATCH   
    MATCH(lookup_value, lookup_array,[matchx-type])
   2. INDEX   
    INDEX(array, row_num, column_num)
  

	
