import React from 'react';
import { sidebarState } from '../recoil/Atoms';
import { useRecoilState } from 'recoil';
import { Button } from '@mui/material';
import Table from '../components/table/Table';

const NewUsers = () => {
  const [sidebar] = useRecoilState(sidebarState);
  return (
    <div style={{
        width: !sidebar ? '87%' : '97%',
    }}>
        <div
          style={{
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",

          }}>
            <Button variant="contained" color="primary" style={{marginRight: 25}}>
                Nuevo Usuario
            </Button>
        </div>
        <div style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
            <div style={{
              width: "90%",
              height: "90%",
            }}>
              <Table data={[]}/>
            </div>
        </div>
    </div>
  )
}

export default NewUsers